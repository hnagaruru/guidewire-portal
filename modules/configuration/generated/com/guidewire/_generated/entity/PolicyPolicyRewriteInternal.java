package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPolicyRewrite.eti;PolicyPolicyRewrite.eix;PolicyPolicyRewrite.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyPolicyRewriteInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the RewrittenPolicy field.
   * Pointer to the rewritten policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getRewrittenPolicy();
  
  
  public gw.pl.persistence.core.Key getRewrittenPolicyID();
  
  
  /**
   * Gets the value of the SourcePolicy field.
   * Pointer to the source policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getSourcePolicy();
  
  
  public gw.pl.persistence.core.Key getSourcePolicyID();
  
  
  /**
   * Sets the value of the RewrittenPolicy field.
   */
  public void setRewrittenPolicy(entity.Policy value);
  
  
  public void setRewrittenPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SourcePolicy field.
   */
  public void setSourcePolicy(entity.Policy value);
  
  
  public void setSourcePolicyID(gw.pl.persistence.core.Key value);
  
  
  
}