package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InstalledEdition.eti;InstalledEdition.eix;InstalledEdition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InstalledEditionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the ClauseHierarchy array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClauseHierarchy(entity.InstalledClauseHierarchy element);
  
  
  /**
   * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRules(entity.InstalledRule element);
  
  
  /**
   * Gets the value of the ActivationDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getActivationDate();
  
  
  /**
   * Gets the value of the ActivationUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getActivationUser();
  
  
  /**
   * Gets the value of the ClauseHierarchy field.
   * All parent to subclause relationships within this edition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledClauseHierarchy[] getClauseHierarchy();
  
  
  /**
   * Gets the value of the EditionCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEditionCode();
  
  
  /**
   * Gets the value of the EditionStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EditionStatus getEditionStatus();
  
  
  /**
   * Gets the value of the EffectiveDate field.
   * The effective date of the edition. May be null for the base edition of a line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate();
  
  
  /**
   * Gets the value of the LineCode field.
   * The PolicyLinePattern that owns this edition.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLineCode();
  
  
  /**
   * Gets the value of the Rules field.
   * Rules associated with this edition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledRule[] getRules();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledEdition getSubtype();
  
  
  /**
   * Removes the given element from the ClauseHierarchy array. This is achieved by marking the element for removal.
   */
  public void removeFromClauseHierarchy(entity.InstalledClauseHierarchy element);
  
  
  /**
   * Removes the given element from the ClauseHierarchy array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClauseHierarchy(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   */
  public void removeFromRules(entity.InstalledRule element);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRules(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ActivationDate field.
   */
  public void setActivationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ActivationUser field.
   */
  public void setActivationUser(java.lang.String value);
  
  
  /**
   * Sets the value of the ClauseHierarchy field.
   */
  public void setClauseHierarchy(entity.InstalledClauseHierarchy[] value);
  
  
  /**
   * Sets the value of the EditionCode field.
   */
  public void setEditionCode(java.lang.String value);
  
  
  /**
   * Sets the value of the EditionStatus field.
   */
  public void setEditionStatus(typekey.EditionStatus value);
  
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LineCode field.
   */
  public void setLineCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Rules field.
   */
  public void setRules(entity.InstalledRule[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.InstalledEdition value);
  
  
  
}