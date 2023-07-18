package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLWaiveImmunity.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyImmunityTypeTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.ImmunityType> implements productmodel.TypekeyImmunityTypeType {
  public TypekeyImmunityTypeTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLWaiveImmunity getCondition() {
    return (productmodel.GLWaiveImmunity)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLWaiveImmunity getGLWaiveImmunity() {
    return (productmodel.GLWaiveImmunity)getClause();
  }
  
  
}