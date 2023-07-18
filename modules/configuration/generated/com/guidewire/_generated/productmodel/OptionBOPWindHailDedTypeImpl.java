package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLocWindHailCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPWindHailDedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPWindHailDedType> implements productmodel.OptionBOPWindHailDedType {
  public OptionBOPWindHailDedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPLocWindHailCov getBOPLocWindHailCov() {
    return (productmodel.BOPLocWindHailCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPLocWindHailCov getCoverage() {
    return (productmodel.BOPLocWindHailCov)getClause();
  }
  
  
}