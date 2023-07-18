package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateBookExportWorkItem.eti;RateBookExportWorkItem.eix;RateBookExportWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateBookExportWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the LanguageType field.
   * The current language when this rate book was exported
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguageType();
  
  
  /**
   * Gets the value of the LocaleType field.
   * The current locale when this rate book was exported
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocaleType getLocaleType();
  
  
  /**
   * Gets the value of the RateBook field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook();
  
  
  /**
   * Gets the value of the RateBookExportType field.
   * The type of export for this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateBookExportType getRateBookExportType();
  
  
  public gw.pl.persistence.core.Key getRateBookID();
  
  
  /**
   * Sets the value of the LanguageType field.
   */
  public void setLanguageType(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the LocaleType field.
   */
  public void setLocaleType(typekey.LocaleType value);
  
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value);
  
  
  /**
   * Sets the value of the RateBookExportType field.
   */
  public void setRateBookExportType(typekey.RateBookExportType value);
  
  
  public void setRateBookID(gw.pl.persistence.core.Key value);
  
  
  
}