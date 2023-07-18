package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageLookup.eti;CoverageLookup.eix;CoverageLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CoverageLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.PolicyLinePatternFilteredLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire._generated.entity.UWCompanyFilteredLookupInternal, com.guidewire.pc.domain.productmodel.CoverageLookupPublicMethods, com.guidewire.pc.domain.productmodel.DenormLookupInitialisable, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods, com.guidewire.pl.system.bundle.InsertCallback {
  /**
   * Gets the value of the CoveragePatternCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoveragePatternCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoverageLookup getSubtype();
  
  
  /**
   * Sets the value of the CoveragePatternCode field.
   */
  public void setCoveragePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.CoverageLookup value);
  
  
  
}