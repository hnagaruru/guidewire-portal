package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLWaiveImmunity.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLWaiveImmunity extends entity.GeneralLiabilityCond {
  protected GLWaiveImmunity()  {
    super((java.lang.Void)null);
  }
  
  public GLWaiveImmunity(entity.PolicyPeriod branch)  {
    super(branch, "GLWaiveImmunity");
  }
  
  public GLWaiveImmunity(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLWaiveImmunity");
  }
  
  public boolean getHasImmunityTypeTerm() {
    return hasCovTerm("ImmunityType");
  }
  
  public productmodel.TypekeyImmunityTypeType getImmunityTypeTerm() {
    return (productmodel.TypekeyImmunityTypeType)getCovTerm("ImmunityType");
  }
  
  static {
    com.guidewire._generated.productmodel.GLWaiveImmunityInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLWaiveImmunity>() {
      public productmodel.GLWaiveImmunity newEmptyInstance() {
        return new productmodel.GLWaiveImmunity();
      }
      
      
    });
  }
}