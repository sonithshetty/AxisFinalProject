package com.globallogic.dto;

import java.util.Set;

public class BookDto {
	private Long id;

    private String title;
    private String author;
    private String isbn;
    private Set<PageDto> pageDto;
    
	public BookDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookDto(Long id, String title, String author, String isbn, Set<PageDto> pageDto) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.pageDto = pageDto;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public Set<PageDto> getPageDto() {
		return pageDto;
	}
	public void setPageDto(Set<PageDto> pageDto) {
		this.pageDto = pageDto;
	}
}
