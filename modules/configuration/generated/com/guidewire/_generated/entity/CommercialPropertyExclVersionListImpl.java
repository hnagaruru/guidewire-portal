package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyExcl.eti;CommercialPropertyExcl.eix;CommercialPropertyExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CommercialPropertyExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CommercialPropertyExclVersionList {
  public CommercialPropertyExclVersionListImpl(entity.CommercialPropertyExcl base)  {
    super(base);
  }
  
  public CommercialPropertyExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CommercialPropertyExcl AsOf(java.util.Date date) {
    return (entity.CommercialPropertyExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CommercialPropertyExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}