package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVhcleAddlInterest.eti;PAVhcleAddlInterest.eix;PAVhcleAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PAVhcleAddlInterestInternal extends com.guidewire._generated.entity.AddlInterestDetailInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the PAVehicle field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle getPAVehicle();
  
  
  public gw.pl.persistence.core.Key getPAVehicleID();
  
  
  /**
   * Sets the value of the PAVehicle field.
   */
  public void setPAVehicle(entity.PersonalVehicle value);
  
  
  public void setPAVehicleID(gw.pl.persistence.core.Key value);
  
  
  
}