package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLineAnswer.eti;PolicyLineAnswer.eix;PolicyLineAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyLineAnswerVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyLineAnswerVersionList {
  public PolicyLineAnswerVersionListImpl(entity.PolicyLineAnswer base)  {
    super(base);
  }
  
  public PolicyLineAnswerVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyLineAnswer AsOf(java.util.Date date) {
    return (entity.PolicyLineAnswer)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLineAnswer> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}