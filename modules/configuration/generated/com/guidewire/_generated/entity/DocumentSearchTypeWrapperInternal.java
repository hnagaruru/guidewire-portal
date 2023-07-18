package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DocumentSearchTypeWrapper.eti;DocumentSearchTypeWrapper.eix;DocumentSearchTypeWrapper.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DocumentSearchTypeWrapperInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the DocumentSearchCriteria field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSearchCriteria getDocumentSearchCriteria();
  
  
  public gw.pl.persistence.core.Key getDocumentSearchCriteriaID();
  
  
  /**
   * Gets the value of the DocumentType field.
   * Document Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentType getDocumentType();
  
  
  /**
   * Sets the value of the DocumentSearchCriteria field.
   */
  public void setDocumentSearchCriteria(entity.DocumentSearchCriteria value);
  
  
  public void setDocumentSearchCriteriaID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DocumentType field.
   */
  public void setDocumentType(typekey.DocumentType value);
  
  
  
}