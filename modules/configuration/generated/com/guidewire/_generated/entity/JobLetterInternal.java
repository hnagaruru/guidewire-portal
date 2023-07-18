package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "JobLetter.eti;JobLetter.eix;JobLetter.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface JobLetterInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Job field.
   * The associated Job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the Letter field.
   * The associated Letter.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Letter getLetter();
  
  
  public gw.pl.persistence.core.Key getLetterID();
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Letter field.
   */
  public void setLetter(entity.Letter value);
  
  
  public void setLetterID(gw.pl.persistence.core.Key value);
  
  
  
}