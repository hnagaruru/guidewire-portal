package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NonRenewalExplanation.eti;NonRenewalExplanation.eix;NonRenewalExplanation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NonRenewalExplanationInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Body field.
   * Explanation for the non-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBody();
  
  
  /**
   * Gets the value of the Code field.
   * The concise name of the non-renewal explanation pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   * The policy term to which this non-renewal explanation belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Sets the value of the Body field.
   */
  public void setBody(java.lang.String value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  
}