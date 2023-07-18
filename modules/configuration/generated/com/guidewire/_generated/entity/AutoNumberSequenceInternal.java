package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AutoNumberSequence.eti;AutoNumberSequence.eix;AutoNumberSequence.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AutoNumberSequenceInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.sequence.AutoNumberSequencePublicMethods, com.guidewire.pc.domain.sequence.impl.AutoNumberSequenceInternalMethods {
  /**
   * Gets the value of the LastBoundIndex field.
   * Last bound index used for this sequence
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLastBoundIndex();
  
  
  /**
   * Sets the value of the LastBoundIndex field.
   */
  public void setLastBoundIndex(java.lang.Integer value);
  
  
  
}