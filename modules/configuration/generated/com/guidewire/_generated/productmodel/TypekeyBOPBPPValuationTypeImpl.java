package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersonalPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyBOPBPPValuationTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.ValuationMethod> implements productmodel.TypekeyBOPBPPValuationType {
  public TypekeyBOPBPPValuationTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPersonalPropCov getBOPPersonalPropCov() {
    return (productmodel.BOPPersonalPropCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPersonalPropCov getCoverage() {
    return (productmodel.BOPPersonalPropCov)getClause();
  }
  
  
}