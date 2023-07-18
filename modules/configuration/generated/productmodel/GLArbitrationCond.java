package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLArbitrationCond.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLArbitrationCond extends entity.GeneralLiabilityCond {
  protected GLArbitrationCond()  {
    super((java.lang.Void)null);
  }
  
  public GLArbitrationCond(entity.PolicyPeriod branch)  {
    super(branch, "GLArbitrationCond");
  }
  
  public GLArbitrationCond(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLArbitrationCond");
  }
  
  public productmodel.TypekeyGLArbitrationTypeType getGLArbitrationTypeTerm() {
    return (productmodel.TypekeyGLArbitrationTypeType)getCovTerm("GLArbitrationType");
  }
  
  public boolean getHasGLArbitrationTypeTerm() {
    return hasCovTerm("GLArbitrationType");
  }
  
  static {
    com.guidewire._generated.productmodel.GLArbitrationCondInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLArbitrationCond>() {
      public productmodel.GLArbitrationCond newEmptyInstance() {
        return new productmodel.GLArbitrationCond();
      }
      
      
    });
  }
}