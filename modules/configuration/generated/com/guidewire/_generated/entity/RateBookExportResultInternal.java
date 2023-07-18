package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateBookExportResult.eti;RateBookExportResult.eix;RateBookExportResult.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateBookExportResultInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the CompletionPercentage field.
   * Indicates the completion percentage of the rate book export
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCompletionPercentage();
  
  
  /**
   * Gets the value of the Data field.
   * Exported rate book data as ExportType(Excel or XML) compressed in GZIP file format
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getData();
  
  
  /**
   * Gets the value of the ExportType field.
   * Indicates the type of export
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateBookExportType getExportType();
  
  
  /**
   * Gets the value of the RateBook field.
   * The rate book this result belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook();
  
  
  public gw.pl.persistence.core.Key getRateBookID();
  
  
  /**
   * Gets the value of the ExportFailed field.
   * Indicates if the export failed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExportFailed();
  
  
  /**
   * Sets the value of the CompletionPercentage field.
   */
  public void setCompletionPercentage(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Data field.
   */
  public void setData(gw.lang.Blob value);
  
  
  /**
   * Sets the value of the ExportFailed field.
   */
  public void setExportFailed(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ExportType field.
   */
  public void setExportType(typekey.RateBookExportType value);
  
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value);
  
  
  public void setRateBookID(gw.pl.persistence.core.Key value);
  
  
  
}