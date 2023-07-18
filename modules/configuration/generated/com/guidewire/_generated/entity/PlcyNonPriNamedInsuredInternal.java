package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PlcyNonPriNamedInsured.eti;PlcyNonPriNamedInsured.eix;PlcyNonPriNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PlcyNonPriNamedInsuredInternal extends com.guidewire._generated.entity.PolicyNamedInsuredInternal, com.guidewire.pc.domain.contact.PlcyNonPriNamedInsuredPublicMethods, gw.api.copier.EffDatedCopyable {
  /**
   * Gets the value of the Relationship field.
   * The relationship to the primary named insured.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRelationship();
  
  
  /**
   * Sets the value of the Relationship field.
   */
  public void setRelationship(java.lang.String value);
  
  
  
}