package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationRisk.eti;LocationRisk.eix;LocationRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LocationRiskInternal extends com.guidewire._generated.entity.ReinsurableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.DenormalizedFKOutOfDomainGraph, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.reinsurance.ReinsurableAdapter {
  /**
   * Gets the value of the AccountLocation field.
   * The account location associated with this risk, denormalized from the PolicyLocation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation getAccountLocation();
  
  
  public gw.pl.persistence.core.Key getAccountLocationID();
  
  
  /**
   * Gets the value of the Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Sets the value of the AccountLocation field.
   */
  public void setAccountLocation(entity.AccountLocation value);
  
  
  public void setAccountLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  
}