package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AvailabilityLookup.eti;AvailabilityLookup.eix;AvailabilityLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AvailabilityLookupInternal extends com.guidewire._generated.entity.LookupInternal {
  /**
   * Gets the value of the Availability field.
   * Specifies whether this lookup is an inclusion or exclusion for the entity whose availability is being computed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AvailabilityType getAvailability();
  
  
  /**
   * Sets the value of the Availability field.
   */
  public void setAvailability(typekey.AvailabilityType value);
  
  
  
}