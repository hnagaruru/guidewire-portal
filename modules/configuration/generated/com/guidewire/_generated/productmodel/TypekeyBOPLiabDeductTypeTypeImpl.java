package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyBOPLiabDeductTypeTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.DeductibleType> implements productmodel.TypekeyBOPLiabDeductTypeType {
  public TypekeyBOPLiabDeductTypeTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPLiabilityCov getBOPLiabilityCov() {
    return (productmodel.BOPLiabilityCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPLiabilityCov getCoverage() {
    return (productmodel.BOPLiabilityCov)getClause();
  }
  
  
}