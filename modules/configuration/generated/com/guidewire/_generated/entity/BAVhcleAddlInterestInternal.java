package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAVhcleAddlInterest.eti;BAVhcleAddlInterest.eix;BAVhcleAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAVhcleAddlInterestInternal extends com.guidewire._generated.entity.AddlInterestDetailInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BAVehicle field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle getBAVehicle();
  
  
  public gw.pl.persistence.core.Key getBAVehicleID();
  
  
  /**
   * Sets the value of the BAVehicle field.
   */
  public void setBAVehicle(entity.BusinessVehicle value);
  
  
  public void setBAVehicleID(gw.pl.persistence.core.Key value);
  
  
  
}