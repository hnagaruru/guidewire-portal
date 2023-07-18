package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPAdditionalCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeySBSpecialPacksTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.SBCovPackages> implements productmodel.TypekeySBSpecialPacksType {
  public TypekeySBSpecialPacksTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPAdditionalCov getBOPAdditionalCov() {
    return (productmodel.BOPAdditionalCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPAdditionalCov getCoverage() {
    return (productmodel.BOPAdditionalCov)getClause();
  }
  
  
}