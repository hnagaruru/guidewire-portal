package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDReference.eti;APDReference.eix;APDReference.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDReferenceInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Attribute field.
   * Reference to an attribute
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getAttribute();
  
  
  public gw.pl.persistence.core.Key getAttributeID();
  
  
  /**
   * Gets the value of the FunctionOperand field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDFunctionOperand getFunctionOperand();
  
  
  public gw.pl.persistence.core.Key getFunctionOperandID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDReference getSubtype();
  
  
  /**
   * Sets the value of the Attribute field.
   */
  public void setAttribute(entity.APDAttribute value);
  
  
  public void setAttributeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FunctionOperand field.
   */
  public void setFunctionOperand(entity.APDFunctionOperand value);
  
  
  public void setFunctionOperandID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDReference value);
  
  
  
}