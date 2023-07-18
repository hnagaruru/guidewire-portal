package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWCompanyFilteredLookup.eti;UWCompanyFilteredLookup.eix;UWCompanyFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWCompanyFilteredLookupInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, gw.pc.productmodel.entity.UWCompanyFilteredLookup {
  /**
   * Gets the value of the UWCompanyCode field.
   * The underwriting company for which this lookup applies, or null if the lookup is not restricted by underwriting company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWCompanyCode getUWCompanyCode();
  
  
  /**
   * Sets the value of the UWCompanyCode field.
   */
  public void setUWCompanyCode(typekey.UWCompanyCode value);
  
  
  
}