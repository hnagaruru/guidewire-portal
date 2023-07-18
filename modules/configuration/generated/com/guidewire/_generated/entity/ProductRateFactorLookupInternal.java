package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductRateFactorLookup.eti;ProductRateFactorLookup.eix;ProductRateFactorLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProductRateFactorLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire._generated.entity.UWCompanyFilteredLookupInternal, com.guidewire.pc.domain.productmodel.ProductRateFactorLookupPublicMethods, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods, com.guidewire.pl.system.bundle.InsertCallback {
  /**
   * Gets the value of the ProductCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the RateFactorPatternCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRateFactorPatternCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProductRateFactorLookup getSubtype();
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the RateFactorPatternCode field.
   */
  public void setRateFactorPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ProductRateFactorLookup value);
  
  
  
}