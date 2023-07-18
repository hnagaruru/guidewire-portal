package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Referenceable.eti;Referenceable.eix;Referenceable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReferenceableInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.archiving.ReferenceablePublicMethods, com.guidewire.pc.domain.archiving.impl.ReferenceableInternalMethods {
  /**
   * Gets the value of the Referenced field.
   * Whether or not this entity is Referenced.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReferenced();
  
  
  /**
   * Sets the value of the Referenced field.
   */
  public void setReferenced(java.lang.Boolean value);
  
  
  
}