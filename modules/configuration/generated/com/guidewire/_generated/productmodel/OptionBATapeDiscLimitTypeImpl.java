package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATapeDiscRecordCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBATapeDiscLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBATapeDiscLimitType> implements productmodel.OptionBATapeDiscLimitType {
  public OptionBATapeDiscLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BATapeDiscRecordCov getBATapeDiscRecordCov() {
    return (productmodel.BATapeDiscRecordCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BATapeDiscRecordCov getCoverage() {
    return (productmodel.BATapeDiscRecordCov)getClause();
  }
  
  
}