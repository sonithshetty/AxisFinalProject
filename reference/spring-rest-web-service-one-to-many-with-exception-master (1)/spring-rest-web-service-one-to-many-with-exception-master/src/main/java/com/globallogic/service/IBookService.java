package com.globallogic.service;

import java.util.List;

import com.globallogic.dto.BookDto;

public interface IBookService {

	public BookDto addBookDetails(BookDto bookDto);

	public List<BookDto> getAllBookDetails();

	public BookDto getBookDetailsByBookId(long id);

	public BookDto updateBookDetailsByBookID(long id, BookDto bookDto);

	public void deleteBookDetailsByBookId(long id);
}
