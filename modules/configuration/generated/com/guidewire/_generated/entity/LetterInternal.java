package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Letter.eti;Letter.eix;Letter.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LetterInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.job.LetterPublicMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String LETTERADDED_EVENT = "LetterAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String LETTERCHANGED_EVENT = "LetterChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String LETTERREMOVED_EVENT = "LetterRemoved";
  
  /**
   * Adds the given element to the JobLetters array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobLetters(entity.JobLetter element);
  
  
  /**
   * Gets the value of the JobLetters field.
   * What Jobs are associated with this Letter.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobLetter[] getJobLetters();
  
  
  /**
   * Gets the value of the Type field.
   * What kind of letter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LetterType getType();
  
  
  /**
   * Removes the given element from the JobLetters array. This is achieved by marking the element for removal.
   */
  public void removeFromJobLetters(entity.JobLetter element);
  
  
  /**
   * Removes the given element from the JobLetters array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJobLetters(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the JobLetters field.
   */
  public void setJobLetters(entity.JobLetter[] value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.LetterType value);
  
  
  
}