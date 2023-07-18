package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ExclusionLookup.eti;ExclusionLookup.eix;ExclusionLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ExclusionLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.PolicyLinePatternFilteredLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire._generated.entity.UWCompanyFilteredLookupInternal, com.guidewire.pc.domain.productmodel.DenormLookupInitialisable, com.guidewire.pc.domain.productmodel.ExclusionLookupPublicMethods, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods, com.guidewire.pl.system.bundle.InsertCallback {
  /**
   * Gets the value of the ExclusionPatternCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExclusionPatternCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ExclusionLookup getSubtype();
  
  
  /**
   * Sets the value of the ExclusionPatternCode field.
   */
  public void setExclusionPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ExclusionLookup value);
  
  
  
}