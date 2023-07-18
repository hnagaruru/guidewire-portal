package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompLine.eti;WorkersCompLine.eix;WorkersCompLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WorkersCompLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.domain.CoverableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the InclusionPersons array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInclusionPersons(entity.InclusionPerson element);
  
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.WCJurisdiction element);
  
  
  /**
   * Adds the given element to the ParticipatingPlanArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParticipatingPlanArray(entity.WCParticipatingPlan element);
  
  
  /**
   * Adds the given element to the PolicyLaborClients array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyLaborClients(entity.PolicyLaborClient element);
  
  
  /**
   * Adds the given element to the PolicyLaborContractors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyLaborContractors(entity.PolicyLaborContractor element);
  
  
  /**
   * Adds the given element to the PolicyOwnerOfficers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyOwnerOfficers(entity.PolicyOwnerOfficer element);
  
  
  /**
   * Adds the given element to the RetrospectiveRatingPlanArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRetrospectiveRatingPlanArray(entity.WCRetrospectiveRatingPlan element);
  
  
  /**
   * Adds the given element to the WCAircraftSeats array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCAircraftSeats(entity.WCAircraftSeat element);
  
  
  /**
   * Adds the given element to the WCCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCCosts(entity.WCCost element);
  
  
  /**
   * Adds the given element to the WCCoveredEmployeeBases array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCCoveredEmployeeBases(entity.WCCoveredEmployeeBase element);
  
  
  /**
   * Adds the given element to the WCCoveredEmployees array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCCoveredEmployees(entity.WCCoveredEmployee element);
  
  
  /**
   * Adds the given element to the WCExcludedWorkplaces array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCExcludedWorkplaces(entity.WCExcludedWorkplace element);
  
  
  /**
   * Adds the given element to the WCFedCoveredEmployees array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCFedCoveredEmployees(entity.WCFedCoveredEmployee element);
  
  
  /**
   * Adds the given element to the WCLineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCLineConditions(entity.WorkersCompCond element);
  
  
  /**
   * Adds the given element to the WCLineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCLineCoverages(entity.WorkersCompCov element);
  
  
  /**
   * Adds the given element to the WCLineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCLineExclusions(entity.WorkersCompExcl element);
  
  
  /**
   * Adds the given element to the WCWaiverOfSubros array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCWaiverOfSubros(entity.WCWaiverOfSubro element);
  
  
  /**
   * Gets the value of the GoverningClass field.
   * Governing Class Code of policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCClassCode getGoverningClass();
  
  
  public gw.pl.persistence.core.Key getGoverningClassID();
  
  
  /**
   * Gets the value of the InclusionPersons field.
   * Included/excluded individuals.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InclusionPerson[] getInclusionPersons();
  
  
  /**
   * Gets the value of the Jurisdictions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCJurisdiction[] getJurisdictions();
  
  
  /**
   * Gets the value of the ManuscriptOptionDesc field.
   * The description of the manuscript endorsement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getManuscriptOptionDesc();
  
  
  /**
   * Gets the value of the ManuscriptPremium field.
   * The cost associate with the manuscript endorsement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getManuscriptPremium();
  
  
  /**
   * Gets the value of the ManuscriptPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getManuscriptPremium_amt();
  
  
  /**
   * Gets the value of the ManuscriptPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getManuscriptPremium_cur();
  
  
  /**
   * Gets the value of the ParticipatingPlan field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCParticipatingPlan getParticipatingPlan();
  
  
  /**
   * Gets the value of the ParticipatingPlanArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCParticipatingPlan[] getParticipatingPlanArray();
  
  
  public gw.pl.persistence.core.Key getParticipatingPlanID();
  
  
  /**
   * Gets the value of the PolicyLaborClients field.
   * Employees that are leased by a company/person from another.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLaborClient[] getPolicyLaborClients();
  
  
  /**
   * Gets the value of the PolicyLaborContractors field.
   * Employees that are contracted by a company/person to another.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLaborContractor[] getPolicyLaborContractors();
  
  
  /**
   * Gets the value of the PolicyOwnerOfficers field.
   * Owner/officers on this line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyOwnerOfficer[] getPolicyOwnerOfficers();
  
  
  /**
   * Gets the value of the RetrospectiveRatingPlan field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetrospectiveRatingPlan getRetrospectiveRatingPlan();
  
  
  /**
   * Gets the value of the RetrospectiveRatingPlanArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetrospectiveRatingPlan[] getRetrospectiveRatingPlanArray();
  
  
  public gw.pl.persistence.core.Key getRetrospectiveRatingPlanID();
  
  
  /**
   * Gets the value of the WCAircraftSeats field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCAircraftSeat[] getWCAircraftSeats();
  
  
  /**
   * Gets the value of the WCCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCost[] getWCCosts();
  
  
  /**
   * Gets the value of the WCCoveredEmployeeBases field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCoveredEmployeeBase[] getWCCoveredEmployeeBases();
  
  
  /**
   * Gets the value of the WCCoveredEmployees field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCoveredEmployee[] getWCCoveredEmployees();
  
  
  /**
   * Gets the value of the WCExcludedWorkplaces field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCExcludedWorkplace[] getWCExcludedWorkplaces();
  
  
  /**
   * Gets the value of the WCFedCoveredEmployees field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCFedCoveredEmployee[] getWCFedCoveredEmployees();
  
  
  /**
   * Gets the value of the WCLineConditions field.
   * Line-level conditions for Workers' Comp.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompCond[] getWCLineConditions();
  
  
  /**
   * Gets the value of the WCLineCoverages field.
   * Line-level coverages for Workers' Comp.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompCov[] getWCLineCoverages();
  
  
  /**
   * Gets the value of the WCLineExclusions field.
   * Line-level exclusions for Workers' Comp.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompExcl[] getWCLineExclusions();
  
  
  /**
   * Gets the value of the WCWaiverOfSubros field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCWaiverOfSubro[] getWCWaiverOfSubros();
  
  
  /**
   * Removes the given element from the InclusionPersons array. This is achieved by marking the element for removal.
   */
  public void removeFromInclusionPersons(entity.InclusionPerson element);
  
  
  /**
   * Removes the given element from the InclusionPersons array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInclusionPersons(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.WCJurisdiction element);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ParticipatingPlanArray array. This is achieved by marking the element for removal.
   */
  public void removeFromParticipatingPlanArray(entity.WCParticipatingPlan element);
  
  
  /**
   * Removes the given element from the ParticipatingPlanArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParticipatingPlanArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyLaborClients array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyLaborClients(entity.PolicyLaborClient element);
  
  
  /**
   * Removes the given element from the PolicyLaborClients array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyLaborClients(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyLaborContractors array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyLaborContractors(entity.PolicyLaborContractor element);
  
  
  /**
   * Removes the given element from the PolicyLaborContractors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyLaborContractors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyOwnerOfficers array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyOwnerOfficers(entity.PolicyOwnerOfficer element);
  
  
  /**
   * Removes the given element from the PolicyOwnerOfficers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyOwnerOfficers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RetrospectiveRatingPlanArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRetrospectiveRatingPlanArray(entity.WCRetrospectiveRatingPlan element);
  
  
  /**
   * Removes the given element from the RetrospectiveRatingPlanArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRetrospectiveRatingPlanArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCAircraftSeats array. This is achieved by marking the element for removal.
   */
  public void removeFromWCAircraftSeats(entity.WCAircraftSeat element);
  
  
  /**
   * Removes the given element from the WCAircraftSeats array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCAircraftSeats(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromWCCosts(entity.WCCost element);
  
  
  /**
   * Removes the given element from the WCCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCCoveredEmployeeBases array. This is achieved by marking the element for removal.
   */
  public void removeFromWCCoveredEmployeeBases(entity.WCCoveredEmployeeBase element);
  
  
  /**
   * Removes the given element from the WCCoveredEmployeeBases array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCCoveredEmployeeBases(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCCoveredEmployees array. This is achieved by marking the element for removal.
   */
  public void removeFromWCCoveredEmployees(entity.WCCoveredEmployee element);
  
  
  /**
   * Removes the given element from the WCCoveredEmployees array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCCoveredEmployees(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCExcludedWorkplaces array. This is achieved by marking the element for removal.
   */
  public void removeFromWCExcludedWorkplaces(entity.WCExcludedWorkplace element);
  
  
  /**
   * Removes the given element from the WCExcludedWorkplaces array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCExcludedWorkplaces(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCFedCoveredEmployees array. This is achieved by marking the element for removal.
   */
  public void removeFromWCFedCoveredEmployees(entity.WCFedCoveredEmployee element);
  
  
  /**
   * Removes the given element from the WCFedCoveredEmployees array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCFedCoveredEmployees(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCLineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromWCLineConditions(entity.WorkersCompCond element);
  
  
  /**
   * Removes the given element from the WCLineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCLineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCLineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromWCLineCoverages(entity.WorkersCompCov element);
  
  
  /**
   * Removes the given element from the WCLineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCLineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCLineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromWCLineExclusions(entity.WorkersCompExcl element);
  
  
  /**
   * Removes the given element from the WCLineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCLineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCWaiverOfSubros array. This is achieved by marking the element for removal.
   */
  public void removeFromWCWaiverOfSubros(entity.WCWaiverOfSubro element);
  
  
  /**
   * Removes the given element from the WCWaiverOfSubros array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCWaiverOfSubros(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the GoverningClass field.
   */
  public void setGoverningClass(entity.WCClassCode value);
  
  
  public void setGoverningClassID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InclusionPersons field.
   */
  public void setInclusionPersons(entity.InclusionPerson[] value);
  
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.WCJurisdiction[] value);
  
  
  /**
   * Sets the value of the ManuscriptOptionDesc field.
   */
  public void setManuscriptOptionDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the ManuscriptPremium field.
   */
  public void setManuscriptPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ManuscriptPremium_amt field.
   */
  public void setManuscriptPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ManuscriptPremium_cur field.
   */
  public void setManuscriptPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the ParticipatingPlan field.
   */
  public void setParticipatingPlan(entity.WCParticipatingPlan value);
  
  
  /**
   * Sets the value of the ParticipatingPlanArray field.
   */
  public void setParticipatingPlanArray(entity.WCParticipatingPlan[] value);
  
  
  public void setParticipatingPlanID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLaborClients field.
   */
  public void setPolicyLaborClients(entity.PolicyLaborClient[] value);
  
  
  /**
   * Sets the value of the PolicyLaborContractors field.
   */
  public void setPolicyLaborContractors(entity.PolicyLaborContractor[] value);
  
  
  /**
   * Sets the value of the PolicyOwnerOfficers field.
   */
  public void setPolicyOwnerOfficers(entity.PolicyOwnerOfficer[] value);
  
  
  /**
   * Sets the value of the RetrospectiveRatingPlan field.
   */
  public void setRetrospectiveRatingPlan(entity.WCRetrospectiveRatingPlan value);
  
  
  /**
   * Sets the value of the RetrospectiveRatingPlanArray field.
   */
  public void setRetrospectiveRatingPlanArray(entity.WCRetrospectiveRatingPlan[] value);
  
  
  public void setRetrospectiveRatingPlanID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WCAircraftSeats field.
   */
  public void setWCAircraftSeats(entity.WCAircraftSeat[] value);
  
  
  /**
   * Sets the value of the WCCosts field.
   */
  public void setWCCosts(entity.WCCost[] value);
  
  
  /**
   * Sets the value of the WCCoveredEmployeeBases field.
   */
  public void setWCCoveredEmployeeBases(entity.WCCoveredEmployeeBase[] value);
  
  
  /**
   * Sets the value of the WCCoveredEmployees field.
   */
  public void setWCCoveredEmployees(entity.WCCoveredEmployee[] value);
  
  
  /**
   * Sets the value of the WCExcludedWorkplaces field.
   */
  public void setWCExcludedWorkplaces(entity.WCExcludedWorkplace[] value);
  
  
  /**
   * Sets the value of the WCFedCoveredEmployees field.
   */
  public void setWCFedCoveredEmployees(entity.WCFedCoveredEmployee[] value);
  
  
  /**
   * Sets the value of the WCLineConditions field.
   */
  public void setWCLineConditions(entity.WorkersCompCond[] value);
  
  
  /**
   * Sets the value of the WCLineCoverages field.
   */
  public void setWCLineCoverages(entity.WorkersCompCov[] value);
  
  
  /**
   * Sets the value of the WCLineExclusions field.
   */
  public void setWCLineExclusions(entity.WorkersCompExcl[] value);
  
  
  /**
   * Sets the value of the WCWaiverOfSubros field.
   */
  public void setWCWaiverOfSubros(entity.WCWaiverOfSubro[] value);
  
  
  
}