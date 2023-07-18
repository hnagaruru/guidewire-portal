package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicle.eti;BusinessVehicle.eix;BusinessVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BusinessVehicleInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.contact.AdditionalInterestContainer, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.BAVhcleAddlInterest element);
  
  
  /**
   * Adds the given element to the BusinessVehicleModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBusinessVehicleModifiers(entity.BusinessVehicleModifier element);
  
  
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.BAStateCovVehicleCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.BusinessVehicleCov element);
  
  
  /**
   * Adds the given element to the LineCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLineCosts(entity.BALineCovCost element);
  
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Additional interests on this vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAVhcleAddlInterest[] getAdditionalInterests();
  
  
  /**
   * Gets the value of the BALine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBALine();
  
  
  public gw.pl.persistence.core.Key getBALineID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BodyType field.
   * Body type of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BodyType getBodyType();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the BusinessVehicleModifiers field.
   * Rating info for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicleModifier[] getBusinessVehicleModifiers();
  
  
  /**
   * Gets the value of the Color field.
   * Color of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColor();
  
  
  /**
   * Gets the value of the CostNew field.
   * Original retail cost of car.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCostNew();
  
  
  /**
   * Gets the value of the CostNew_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCostNew_amt();
  
  
  /**
   * Gets the value of the CostNew_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCostNew_cur();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAStateCovVehicleCost[] getCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicleCov[] getCoverages();
  
  
  /**
   * Gets the value of the DestinationZone field.
   * Destination zone of vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Zone getDestinationZone();
  
  
  /**
   * Gets the value of the Experience field.
   * Experience of the possible drivers of this vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CombinedDriverExp getExperience();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Industry field.
   * The industry the vehicle is in
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleIndustry getIndustry();
  
  
  /**
   * Gets the value of the IndustryUse field.
   * Vehicle industry use
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleIndustryUse getIndustryUse();
  
  
  /**
   * Gets the value of the IntraInterStateUsage field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. IntraInterStateUsage applicable only to MI
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.IntraInterStateUsage getIntraInterStateUsage();
  
  
  /**
   * Gets the value of the LengthOfLease field.
   * The lease period of a leased or a rented vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LengthOfLease getLengthOfLease();
  
  
  /**
   * Gets the value of the LicensePlate field.
   * License plate of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicensePlate();
  
  
  /**
   * Gets the value of the LicenseState field.
   * State in which the vehicle is licensed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseState();
  
  
  /**
   * Gets the value of the LineCosts field.
   * Costs for Commercial Auto Line coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BALineCovCost[] getLineCosts();
  
  
  /**
   * Gets the value of the Location field.
   * Location of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the Make field.
   * Make of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMake();
  
  
  /**
   * Gets the value of the Model field.
   * Model of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModel();
  
  
  /**
   * Gets the value of the OriginationZone field.
   * Origination zone of vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Zone getOriginationZone();
  
  
  /**
   * Gets the value of the PipCovered field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Indicate how PIP should be rated
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PipCovered getPipCovered();
  
  
  /**
   * Gets the value of the PrimaryUse field.
   * Primary use of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehiclePrimaryUse getPrimaryUse();
  
  
  /**
   * Gets the value of the StatedValue field.
   * User enter stated value of vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStatedValue();
  
  
  /**
   * Gets the value of the StatedValue_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStatedValue_amt();
  
  
  /**
   * Gets the value of the StatedValue_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStatedValue_cur();
  
  
  /**
   * Gets the value of the VehicleClassCode field.
   * Vehicle classification code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVehicleClassCode();
  
  
  /**
   * Gets the value of the VehicleNumber field.
   * Vehicle number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getVehicleNumber();
  
  
  /**
   * Gets the value of the VehicleRadius field.
   * Normal radius of operations from principle garage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RadiusCode getVehicleRadius();
  
  
  /**
   * Gets the value of the VehicleSizeClass field.
   * Weight or size class of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleSizeClass getVehicleSizeClass();
  
  
  /**
   * Gets the value of the VehicleType field.
   * Type of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleType getVehicleType();
  
  
  /**
   * Gets the value of the Vin field.
   * VIN (vehicle identification number) of the vehicle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVin();
  
  
  /**
   * Gets the value of the Year field.
   * Vehicle model year
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYear();
  
  
  /**
   * Gets the value of the YearPurchased field.
   * year the vehicle is purchased
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearPurchased();
  
  
  /**
   * Gets the value of the AntiLockBrakes field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not the car has anti-lock brakes
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAntiLockBrakes();
  
  
  /**
   * Gets the value of the AntiTheft field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not the car is equipped with an anti-theft device
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAntiTheft();
  
  
  /**
   * Gets the value of the DoesUMUIMApply field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not UM and UIM coverage applies to this vehicle
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoesUMUIMApply();
  
  
  /**
   * Gets the value of the LeaseOrRent field.
   * If this vehicle is leased or rented.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLeaseOrRent();
  
  
  /**
   * Gets the value of the OwnedByPoliticalSub field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Owned by political subdivision
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOwnedByPoliticalSub();
  
  
  /**
   * Gets the value of the SafeDrivingCert field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not the primary driver of the vehicle has a safe driving certificate
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSafeDrivingCert();
  
  
  /**
   * Gets the value of the VehicleCondition field.
   * true if vehicle is new, false if vehicle is used
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isVehicleCondition();
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.BAVhcleAddlInterest element);
  
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BusinessVehicleModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromBusinessVehicleModifiers(entity.BusinessVehicleModifier element);
  
  
  /**
   * Removes the given element from the BusinessVehicleModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBusinessVehicleModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.BAStateCovVehicleCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.BusinessVehicleCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LineCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromLineCosts(entity.BALineCovCost element);
  
  
  /**
   * Removes the given element from the LineCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLineCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.BAVhcleAddlInterest[] value);
  
  
  /**
   * Sets the value of the AntiLockBrakes field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not the car has anti-lock brakes
   */
  @java.lang.Deprecated
  public void setAntiLockBrakes(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AntiTheft field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not the car is equipped with an anti-theft device
   */
  @java.lang.Deprecated
  public void setAntiTheft(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BALine field.
   */
  public void setBALine(entity.BusinessAutoLine value);
  
  
  public void setBALineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BusinessVehicle value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BodyType field.
   */
  public void setBodyType(typekey.BodyType value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BusinessVehicleModifiers field.
   */
  public void setBusinessVehicleModifiers(entity.BusinessVehicleModifier[] value);
  
  
  /**
   * Sets the value of the Color field.
   */
  public void setColor(java.lang.String value);
  
  
  /**
   * Sets the value of the CostNew field.
   */
  public void setCostNew(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CostNew_amt field.
   */
  public void setCostNew_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CostNew_cur field.
   */
  public void setCostNew_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.BAStateCovVehicleCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.BusinessVehicleCov[] value);
  
  
  /**
   * Sets the value of the DestinationZone field.
   */
  public void setDestinationZone(typekey.Zone value);
  
  
  /**
   * Sets the value of the DoesUMUIMApply field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not UM and UIM coverage applies to this vehicle
   */
  @java.lang.Deprecated
  public void setDoesUMUIMApply(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Experience field.
   */
  public void setExperience(typekey.CombinedDriverExp value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BusinessVehicle value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Industry field.
   */
  public void setIndustry(typekey.VehicleIndustry value);
  
  
  /**
   * Sets the value of the IndustryUse field.
   */
  public void setIndustryUse(typekey.VehicleIndustryUse value);
  
  
  /**
   * Sets the value of the IntraInterStateUsage field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. IntraInterStateUsage applicable only to MI
   */
  @java.lang.Deprecated
  public void setIntraInterStateUsage(typekey.IntraInterStateUsage value);
  
  
  /**
   * Sets the value of the LeaseOrRent field.
   */
  public void setLeaseOrRent(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LengthOfLease field.
   */
  public void setLengthOfLease(typekey.LengthOfLease value);
  
  
  /**
   * Sets the value of the LicensePlate field.
   */
  public void setLicensePlate(java.lang.String value);
  
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.State value);
  
  
  /**
   * Sets the value of the LineCosts field.
   */
  public void setLineCosts(entity.BALineCovCost[] value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Make field.
   */
  public void setMake(java.lang.String value);
  
  
  /**
   * Sets the value of the Model field.
   */
  public void setModel(java.lang.String value);
  
  
  /**
   * Sets the value of the OriginationZone field.
   */
  public void setOriginationZone(typekey.Zone value);
  
  
  /**
   * Sets the value of the OwnedByPoliticalSub field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Owned by political subdivision
   */
  @java.lang.Deprecated
  public void setOwnedByPoliticalSub(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PipCovered field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Indicate how PIP should be rated
   */
  @java.lang.Deprecated
  public void setPipCovered(typekey.PipCovered value);
  
  
  /**
   * Sets the value of the PrimaryUse field.
   */
  public void setPrimaryUse(typekey.VehiclePrimaryUse value);
  
  
  /**
   * Sets the value of the SafeDrivingCert field.
   * @deprecated Deprecated in PC 7.0 - Use vehicle modifier instead. Whether or not the primary driver of the vehicle has a safe driving certificate
   */
  @java.lang.Deprecated
  public void setSafeDrivingCert(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StatedValue field.
   */
  public void setStatedValue(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the StatedValue_amt field.
   */
  public void setStatedValue_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StatedValue_cur field.
   */
  public void setStatedValue_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the VehicleClassCode field.
   */
  public void setVehicleClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the VehicleCondition field.
   */
  public void setVehicleCondition(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the VehicleNumber field.
   */
  public void setVehicleNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the VehicleRadius field.
   */
  public void setVehicleRadius(typekey.RadiusCode value);
  
  
  /**
   * Sets the value of the VehicleSizeClass field.
   */
  public void setVehicleSizeClass(typekey.VehicleSizeClass value);
  
  
  /**
   * Sets the value of the VehicleType field.
   */
  public void setVehicleType(typekey.VehicleType value);
  
  
  /**
   * Sets the value of the Vin field.
   */
  public void setVin(java.lang.String value);
  
  
  /**
   * Sets the value of the Year field.
   */
  public void setYear(java.lang.Integer value);
  
  
  /**
   * Sets the value of the YearPurchased field.
   */
  public void setYearPurchased(java.lang.Integer value);
  
  
  
}