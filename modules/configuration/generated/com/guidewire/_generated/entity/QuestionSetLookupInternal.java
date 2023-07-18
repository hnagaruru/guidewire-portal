package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "QuestionSetLookup.eti;QuestionSetLookup.eix;QuestionSetLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface QuestionSetLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.IndustryCodeDrivenLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire.pc.domain.productmodel.QuestionSetLookupPublicMethods, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods {
  /**
   * Gets the value of the PolicyLinePatternCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the QuestionSetCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuestionSetCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.QuestionSetLookup getSubtype();
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the QuestionSetCode field.
   */
  public void setQuestionSetCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.QuestionSetLookup value);
  
  
  
}