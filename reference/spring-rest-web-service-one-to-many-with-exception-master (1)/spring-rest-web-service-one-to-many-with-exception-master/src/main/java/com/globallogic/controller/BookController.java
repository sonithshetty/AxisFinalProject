package com.globallogic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globallogic.dto.BookDto;
import com.globallogic.service.IBookService;
import com.globallogic.utils.AppConstant;



@RestController
@RequestMapping("/api/v1")
public class BookController {

	@Autowired
	private IBookService bookService;
	
	@PostMapping("/books")
	public ResponseEntity<BookDto> addBookDetails(@RequestBody BookDto bookDto) {
		
		return new ResponseEntity<BookDto>( bookService.addBookDetails(bookDto),HttpStatus.OK);
	}
	
	@GetMapping(value = "/books")
	public ResponseEntity<List<BookDto>> getAllBookDetails() {
		
		return new ResponseEntity<List<BookDto>>(bookService.getAllBookDetails(),HttpStatus.OK);
	}
	
	@GetMapping(value = "/books/{id}")
	public ResponseEntity<BookDto> getBookDetailsByBookId(@PathVariable long id) {
		
		return new ResponseEntity<BookDto>(bookService.getBookDetailsByBookId(id),HttpStatus.OK);
	}
	
	@PutMapping(value = "/books/{id}")
	public ResponseEntity<BookDto> updateBookDetailsByBookID(@PathVariable long id, @RequestBody BookDto bookDto) {
		
		return new ResponseEntity<BookDto>(bookService.updateBookDetailsByBookID(id, bookDto),HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/books/{id}")
	public ResponseEntity<String> deleteBookDetailsByBookId(@PathVariable long id) {
		
		bookService.deleteBookDetailsByBookId(id);
		return new ResponseEntity<String>(AppConstant.DELETE_MESSAGE, HttpStatus.OK);
	}
}
