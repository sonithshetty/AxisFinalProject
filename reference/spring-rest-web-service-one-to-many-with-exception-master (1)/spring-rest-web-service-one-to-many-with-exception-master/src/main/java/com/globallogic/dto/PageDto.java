package com.globallogic.dto;

public class PageDto {
private Long id;
	
	private int number;
    private String content;
    private String chapter;
    private BookDto bookDto;
    
	public PageDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PageDto(Long id, int number, String content, String chapter, BookDto bookDto) {
		super();
		this.id = id;
		this.number = number;
		this.content = content;
		this.chapter = chapter;
		this.bookDto = bookDto;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getChapter() {
		return chapter;
	}

	public void setChapter(String chapter) {
		this.chapter = chapter;
	}

	public BookDto getBookDto() {
		return bookDto;
	}

	public void setBookDto(BookDto bookDto) {
		this.bookDto = bookDto;
	}
}
