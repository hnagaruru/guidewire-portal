package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPropertyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPBaseDedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPBaseDedType> implements productmodel.OptionBOPBaseDedType {
  public OptionBOPBaseDedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPropertyCov getBOPPropertyCov() {
    return (productmodel.BOPPropertyCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPropertyCov getCoverage() {
    return (productmodel.BOPPropertyCov)getClause();
  }
  
  
}