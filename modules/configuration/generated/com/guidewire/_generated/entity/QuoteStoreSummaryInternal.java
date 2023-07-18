package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "QuoteStoreSummary.eti;QuoteStoreSummary.eix;QuoteStoreSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface QuoteStoreSummaryInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the Contact field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the EmailAddress field.
   * Primary email address of Primary Named Insured contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmailAddress();
  
  
  /**
   * Gets the value of the Name field.
   * Display name of the Primary Named Insured contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the QuoteIdentifier field.
   * A unique ID associated with PolicyPeriod quote
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuoteIdentifier();
  
  
  /**
   * Gets the value of the SubmissionNumber field.
   * The SubmissionNumber of the Submission of the PolicyPeriod
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubmissionNumber();
  
  
  /**
   * Gets the value of the WorkPhone field.
   * Work phone of Primary Named Insured contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWorkPhone();
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.Contact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EmailAddress field.
   */
  public void setEmailAddress(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the QuoteIdentifier field.
   */
  public void setQuoteIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the SubmissionNumber field.
   */
  public void setSubmissionNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the WorkPhone field.
   */
  public void setWorkPhone(java.lang.String value);
  
  
  
}