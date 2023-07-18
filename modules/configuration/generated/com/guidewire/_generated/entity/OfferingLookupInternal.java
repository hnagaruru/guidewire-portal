package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OfferingLookup.eti;OfferingLookup.eix;OfferingLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OfferingLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ProductModelDelegateInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.IndustryCodeDrivenLookupInternal, com.guidewire._generated.entity.JobTypeFilteredLookupInternal, com.guidewire.pc.domain.productmodel.OfferingLookupPublicMethods, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods {
  /**
   * Gets the value of the OfferingCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfferingCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OfferingLookup getSubtype();
  
  
  /**
   * Sets the value of the OfferingCode field.
   */
  public void setOfferingCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.OfferingLookup value);
  
  
  
}