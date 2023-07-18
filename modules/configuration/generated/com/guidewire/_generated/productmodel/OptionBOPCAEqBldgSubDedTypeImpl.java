package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCAEqBldgSubCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPCAEqBldgSubDedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPCAEqBldgSubDedType> implements productmodel.OptionBOPCAEqBldgSubDedType {
  public OptionBOPCAEqBldgSubDedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPCAEqBldgSubCov getBOPCAEqBldgSubCov() {
    return (productmodel.BOPCAEqBldgSubCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPCAEqBldgSubCov getCoverage() {
    return (productmodel.BOPCAEqBldgSubCov)getClause();
  }
  
  
}