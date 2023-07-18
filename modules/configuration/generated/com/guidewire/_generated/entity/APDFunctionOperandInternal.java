package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDFunctionOperand.eti;APDFunctionOperand.eix;APDFunctionOperand.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDFunctionOperandInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the FunctionArguments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFunctionArguments(entity.APDReference element);
  
  
  /**
   * Gets the value of the Func field.
   * Function name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDFunctionType getFunc();
  
  
  /**
   * Gets the value of the FunctionArguments field.
   * Function argument references
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDReference[] getFunctionArguments();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDFunctionOperand getSubtype();
  
  
  /**
   * Removes the given element from the FunctionArguments array. This is achieved by marking the element for removal.
   */
  public void removeFromFunctionArguments(entity.APDReference element);
  
  
  /**
   * Removes the given element from the FunctionArguments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFunctionArguments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Func field.
   */
  public void setFunc(typekey.APDFunctionType value);
  
  
  /**
   * Sets the value of the FunctionArguments field.
   */
  public void setFunctionArguments(entity.APDReference[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDFunctionOperand value);
  
  
  
}