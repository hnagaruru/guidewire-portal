package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLPackageTerm.eti;ETLPackageTerm.eix;ETLPackageTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLPackageTermInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier of the source pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the CovTermPack field.
   * the foreign key to the Term Package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLCovTermPack getCovTermPack();
  
  
  public gw.pl.persistence.core.Key getCovTermPackID();
  
  
  /**
   * Gets the value of the Name field.
   * The Name for this package term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ETLPackageTerm getSubtype();
  
  
  /**
   * Gets the value of the Value field.
   * The value for this Package Term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Gets the value of the ValueType field.
   * The Value Type for the package term. Should Correspond to the CovTermModelVal typelist
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValueType();
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the CovTermPack field.
   */
  public void setCovTermPack(entity.ETLCovTermPack value);
  
  
  public void setCovTermPackID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ETLPackageTerm value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ValueType field.
   */
  public void setValueType(java.lang.String value);
  
  
  
}