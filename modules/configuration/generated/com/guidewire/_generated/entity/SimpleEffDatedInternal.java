package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SimpleEffDated.eti;SimpleEffDated.eix;SimpleEffDated.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface SimpleEffDatedInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods {
  /**
   * Gets the value of the EffectiveDate field.
   * Effective date of this row.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate();
  
  
  /**
   * Gets the value of the ExpirationDate field.
   * Expiration date of this row or NULL in the database if this row never expires.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate();
  
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value);
  
  
  
}