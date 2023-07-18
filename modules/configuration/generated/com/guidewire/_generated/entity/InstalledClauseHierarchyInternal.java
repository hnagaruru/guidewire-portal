package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InstalledClauseHierarchy.eti;InstalledClauseHierarchy.eix;InstalledClauseHierarchy.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InstalledClauseHierarchyInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CodeIdentifier field.
   * The identifier of the subclause (child clause)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the InstalledEdition field.
   * The edition that this relationship belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledEdition getInstalledEdition();
  
  
  public gw.pl.persistence.core.Key getInstalledEditionID();
  
  
  /**
   * Gets the value of the ParentCodeIdentifier field.
   * The identifier of the parent clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParentCodeIdentifier();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledClauseHierarchy getSubtype();
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the InstalledEdition field.
   */
  public void setInstalledEdition(entity.InstalledEdition value);
  
  
  public void setInstalledEditionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ParentCodeIdentifier field.
   */
  public void setParentCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.InstalledClauseHierarchy value);
  
  
  
}