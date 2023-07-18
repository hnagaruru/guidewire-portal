package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLine.eti;PolicyLine.eix;PolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyLineInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.AnswerContainerInternal, com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods, com.guidewire.pc.domain.policy.lines.impl.PolicyLineInternalMethods, com.guidewire.pc.domain.rating.RateflowMethods, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.copier.EffDatedCopyable, gw.api.domain.AnswerContainerAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the AdditionalInsureds array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInsureds(entity.PolicyAddlInsured element);
  
  
  /**
   * Adds the given element to the CoverageSymbolGroups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup element);
  
  
  /**
   * Adds the given element to the DiagnosticRatingWorksheets array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet element);
  
  
  /**
   * Adds the given element to the LineAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLineAnswers(entity.PolicyLineAnswer element);
  
  
  /**
   * Gets the value of the AdditionalInsureds field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsured[] getAdditionalInsureds();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CoverageSymbolGroups field.
   * Groups of coverage symbols on this policy line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CoverageSymbolGroup[] getCoverageSymbolGroups();
  
  
  /**
   * Gets the value of the DiagnosticRatingWorksheets field.
   * A list of DiagnosticRatingWorksheet entities related to this PolicyLine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagnosticRatingWorksheet[] getDiagnosticRatingWorksheets();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the LineAnswers field.
   * Set of answers for this policyline.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLineAnswer[] getLineAnswers();
  
  
  /**
   * Gets the value of the NumAddInsured field.
   * The number of additional insureds. For Quick Quotes users enter just the number additional insureds instead of all the details
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumAddInsured();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of PolicyLine this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyLine getSubtype();
  
  
  /**
   * Removes the given element from the AdditionalInsureds array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInsureds(entity.PolicyAddlInsured element);
  
  
  /**
   * Removes the given element from the AdditionalInsureds array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInsureds(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CoverageSymbolGroups array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageSymbolGroups(entity.CoverageSymbolGroup element);
  
  
  /**
   * Removes the given element from the CoverageSymbolGroups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageSymbolGroups(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the DiagnosticRatingWorksheets array. This is achieved by marking the element for removal.
   */
  public void removeFromDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet element);
  
  
  /**
   * Removes the given element from the DiagnosticRatingWorksheets array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDiagnosticRatingWorksheets(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LineAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromLineAnswers(entity.PolicyLineAnswer element);
  
  
  /**
   * Removes the given element from the LineAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLineAnswers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInsureds field.
   */
  public void setAdditionalInsureds(entity.PolicyAddlInsured[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyLine value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CoverageSymbolGroups field.
   */
  public void setCoverageSymbolGroups(entity.CoverageSymbolGroup[] value);
  
  
  /**
   * Sets the value of the DiagnosticRatingWorksheets field.
   */
  public void setDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.PolicyLine value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LineAnswers field.
   */
  public void setLineAnswers(entity.PolicyLineAnswer[] value);
  
  
  /**
   * Sets the value of the NumAddInsured field.
   */
  public void setNumAddInsured(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PatternCode field.
   */
  public void setPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PolicyLine value);
  
  
  
}