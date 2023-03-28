package com.globallogic.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.globallogic.dto.BookDto;
import com.globallogic.dto.PageDto;
import com.globallogic.exception.IdNotFoundException;
import com.globallogic.model.Book;
import com.globallogic.model.Page;
import com.globallogic.repository.BookRepository;
import com.globallogic.repository.PageRepository;
import com.globallogic.utils.AppConstant;

@Service
public class BookServiceImpl implements IBookService{
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private PageRepository pageRepository;

	public BookServiceImpl(BookRepository bookRepository, PageRepository pageRepository) {
		super();
		this.bookRepository = bookRepository;
		this.pageRepository = pageRepository;
	}

	/*
	 * 
	 * @Description : this method is used to add all the details including pages
	 * @Param: It takes book type  as paramter
	 * @returns : It returns list of book details
	 * @throws :
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022
	 *  
	 */
	@Override
	public BookDto addBookDetails(BookDto bookDto) {
		// TODO Auto-generated method stub
		return convertToDto(bookRepository.save(convertToEntity(bookDto)));
	}

	/*
	 * 
	 * @Description : this method is used to get all the details including pages
	 * @Param: 
	 * @returns : It returns list of book details
	 * @throws :
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022
	 *  
	 */
	@Override
	public List<BookDto> getAllBookDetails() {
		// TODO Auto-generated method stub
		List<Book> books =(List<Book>) bookRepository.findAll();
		List<BookDto> bookDtos = new ArrayList<>();
		
		for(Book book : books) {
			
			bookDtos.add(convertToDto(book));
		}
		
		return bookDtos;
	}

	/*
	 * 
	 * @Description : this method is used to get the book details using book id
	 * @Param: it takes book id as a paramater
	 * @returns : It returns  book details
	 * @throws :throw an exception when id is not available
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022
	 *  
	 */
	@Override
	public BookDto getBookDetailsByBookId(long id) {
		// TODO Auto-generated method stub
		Book book =  bookRepository.findById(id).
				 orElseThrow(() -> new IdNotFoundException(AppConstant.NOT_FOUND_MESSAGE +id));
		
		return convertToDto(book);
	}

	/*
	 * 
	 * @Description : this method is used to update the book details according to user input using book id 
	 *  @Param: it takes book id and object of book dto as a paramater
	 * @returns : It returns  the updated book details
	 * @throws : throw an exception when id is not available to update
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022
	 *  
	 */
	@Override
	public BookDto updateBookDetailsByBookID(long id, BookDto bookDto) {
		// TODO Auto-generated method stub
		Book book =  bookRepository.findById(id).
				orElseThrow(() -> new IdNotFoundException(AppConstant.NOT_FOUND_MESSAGE +"To Update With Id " +id));
		
		Set<Page> pages = new HashSet<>();

		book.setId(bookDto.getId());
		book.setTitle(bookDto.getAuthor());
		book.setAuthor(bookDto.getAuthor());
		book.setIsbn(bookDto.getIsbn());
		

		Set<PageDto> pageDtos = bookDto.getPageDto();

        for (PageDto pageDto : pageDtos) {

            Page page = new Page();
            page.setId(pageDto.getId());
            page.setNumber(pageDto.getNumber());
            page.setChapter(pageDto.getChapter());
            page.setContent(pageDto.getContent());
            page.setBook(book);
            pages.add(page);
        }
        book.setPages(pages);
        
		return convertToDto(bookRepository.save(book));
	}

	/*
	 * 
	 * @Description : this method is used to delete the book details according to  book id 
	 * @Param: it takes book id  a paramater
	 * @returns : It returns  the confirmation message for deleting the data or not
	 * @throws : throw an exception when id is not available to delete
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022
	 *  
	 */
	@Override
	public void deleteBookDetailsByBookId(long id) {
		// TODO Auto-generated method stub
		Book book = bookRepository.findById(id).
				orElseThrow(() -> new IdNotFoundException(AppConstant.NOT_FOUND_MESSAGE +id));
		
		bookRepository.delete(book);
	}
	
	/*
	 * 
	 * @Description : method to convert entity to dto
	 * @returns : It returns  the confirmation message for deleting the data or not
	 * @throws : throw an exception when id is not available to update
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022
	 */
	
	private BookDto convertToDto(Book book) {
		
		BookDto bookDto = new BookDto();
		
		Set<PageDto> pageDtos = new HashSet<>();
		
		bookDto.setId(book.getId());
		bookDto.setTitle(book.getAuthor());
		bookDto.setAuthor(book.getAuthor());
		bookDto.setIsbn(book.getIsbn());
		
		Set<Page> pages = book.getPages();
		
		for(Page page : pages) {
		PageDto pageDto = new PageDto();
		pageDto.setId(page.getId());
		pageDto.setNumber(page.getNumber());
		pageDto.setChapter(page.getChapter());
		pageDto.setContent(page.getContent());
		
		pageDtos.add(pageDto);
		}
		
		bookDto.setPageDto(pageDtos);
		
		return bookDto;
	}
	
	/*
	 * 
	 * Description : Converts DTO to Entity
	 * @returns : It returns  the confirmation message for deleting the data or not
	 * @throws : throw an exception when id is not available to update
	 * @Created by : Manisha Kumari
	 * @createdDate : 04 november 2022 
	 */
		
		private Book convertToEntity(BookDto bookDto) {
			
			Book book = new Book();
			Set<Page> pages = new HashSet<>();

			book.setId(bookDto.getId());
			book.setTitle(bookDto.getAuthor());
			book.setAuthor(bookDto.getAuthor());
			book.setIsbn(bookDto.getIsbn());
			

			Set<PageDto> pageDtos = bookDto.getPageDto();

	        for (PageDto pageDto : pageDtos) {

	            Page page = new Page();
	            page.setId(pageDto.getId());
	            page.setNumber(pageDto.getNumber());
	            page.setChapter(pageDto.getChapter());
	            page.setContent(pageDto.getContent());
	            page.setBook(book);
	            pages.add(page);
	        }
	        book.setPages(pages);
			
			return book;
		}
		
		


}
