package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CovTermLookup.eti;CovTermLookup.eix;CovTermLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CovTermLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.PolicyLinePatternFilteredLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire._generated.entity.UWCompanyFilteredLookupInternal, com.guidewire.pc.domain.productmodel.CovTermLookupPublicMethods, com.guidewire.pc.domain.productmodel.DenormLookupInitialisable, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods, com.guidewire.pl.system.bundle.InsertCallback {
  /**
   * Gets the value of the CovTermPatternCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermPatternCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CovTermLookup getSubtype();
  
  
  /**
   * Sets the value of the CovTermPatternCode field.
   */
  public void setCovTermPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.CovTermLookup value);
  
  
  
}