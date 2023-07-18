package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "QuestionLookup.eti;QuestionLookup.eix;QuestionLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface QuestionLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire.pc.domain.productmodel.QuestionLookupPublicMethods, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods {
  /**
   * Gets the value of the QuestionCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuestionCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.QuestionLookup getSubtype();
  
  
  /**
   * Sets the value of the QuestionCode field.
   */
  public void setQuestionCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.QuestionLookup value);
  
  
  
}