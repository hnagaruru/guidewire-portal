package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GeneralLiabilityLine.eti;GeneralLiabilityLine.eix;GeneralLiabilityLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GeneralLiabilityLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the Exposures array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExposures(entity.GLExposure element);
  
  
  /**
   * Adds the given element to the GLCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLCosts(entity.GLCost element);
  
  
  /**
   * Adds the given element to the GLLineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLLineConditions(entity.GeneralLiabilityCond element);
  
  
  /**
   * Adds the given element to the GLLineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLLineCoverages(entity.GeneralLiabilityCov element);
  
  
  /**
   * Adds the given element to the GLLineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLLineExclusions(entity.GeneralLiabilityExcl element);
  
  
  /**
   * Adds the given element to the GLModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLModifiers(entity.GLModifier element);
  
  
  /**
   * Gets the value of the ClaimsMadeOrigEffDate field.
   * Claims made original effective date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getClaimsMadeOrigEffDate();
  
  
  /**
   * Gets the value of the Exposures field.
   * Exposures covered by this policy line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLExposure[] getExposures();
  
  
  /**
   * Gets the value of the GLCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCost[] getGLCosts();
  
  
  /**
   * Gets the value of the GLCoverageForm field.
   * Form of coverage (e.g. Occurrence, Claims Made)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GLCoverageFormType getGLCoverageForm();
  
  
  /**
   * Gets the value of the GLLineConditions field.
   * Line-level conditions for General Liability.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityCond[] getGLLineConditions();
  
  
  /**
   * Gets the value of the GLLineCoverages field.
   * Line-level coverages for General Liability.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityCov[] getGLLineCoverages();
  
  
  /**
   * Gets the value of the GLLineExclusions field.
   * Line-level exclusions for General Liability.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityExcl[] getGLLineExclusions();
  
  
  /**
   * Gets the value of the GLModifiers field.
   * Rating Modifiers for this policy line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLModifier[] getGLModifiers();
  
  
  /**
   * Gets the value of the RetroactiveDate field.
   * Retroactive date for claims made.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRetroactiveDate();
  
  
  /**
   * Gets the value of the LocationLimits field.
   * Do limits apply by location/project?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLocationLimits();
  
  
  /**
   * Gets the value of the PollutionCleanupExp field.
   * User selection for pollution cleanup expense, associated with Pollution liability coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPollutionCleanupExp();
  
  
  /**
   * Gets the value of the SplitLimits field.
   * Do split BI/PD split limits apply?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSplitLimits();
  
  
  /**
   * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
   */
  public void removeFromExposures(entity.GLExposure element);
  
  
  /**
   * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExposures(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GLCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromGLCosts(entity.GLCost element);
  
  
  /**
   * Removes the given element from the GLCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GLLineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromGLLineConditions(entity.GeneralLiabilityCond element);
  
  
  /**
   * Removes the given element from the GLLineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLLineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GLLineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromGLLineCoverages(entity.GeneralLiabilityCov element);
  
  
  /**
   * Removes the given element from the GLLineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLLineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GLLineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromGLLineExclusions(entity.GeneralLiabilityExcl element);
  
  
  /**
   * Removes the given element from the GLLineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLLineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GLModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromGLModifiers(entity.GLModifier element);
  
  
  /**
   * Removes the given element from the GLModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ClaimsMadeOrigEffDate field.
   */
  public void setClaimsMadeOrigEffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Exposures field.
   */
  public void setExposures(entity.GLExposure[] value);
  
  
  /**
   * Sets the value of the GLCosts field.
   */
  public void setGLCosts(entity.GLCost[] value);
  
  
  /**
   * Sets the value of the GLCoverageForm field.
   */
  public void setGLCoverageForm(typekey.GLCoverageFormType value);
  
  
  /**
   * Sets the value of the GLLineConditions field.
   */
  public void setGLLineConditions(entity.GeneralLiabilityCond[] value);
  
  
  /**
   * Sets the value of the GLLineCoverages field.
   */
  public void setGLLineCoverages(entity.GeneralLiabilityCov[] value);
  
  
  /**
   * Sets the value of the GLLineExclusions field.
   */
  public void setGLLineExclusions(entity.GeneralLiabilityExcl[] value);
  
  
  /**
   * Sets the value of the GLModifiers field.
   */
  public void setGLModifiers(entity.GLModifier[] value);
  
  
  /**
   * Sets the value of the LocationLimits field.
   */
  public void setLocationLimits(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PollutionCleanupExp field.
   */
  public void setPollutionCleanupExp(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RetroactiveDate field.
   */
  public void setRetroactiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the SplitLimits field.
   */
  public void setSplitLimits(java.lang.Boolean value);
  
  
  
}