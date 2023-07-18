package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLLimitedPAandInjuryCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLLimitedPAandInjuryCov extends entity.GeneralLiabilityCov {
  protected GLLimitedPAandInjuryCov()  {
    super((java.lang.Void)null);
  }
  
  public GLLimitedPAandInjuryCov(entity.PolicyPeriod branch)  {
    super(branch, "GLLimitedPAandInjuryCov");
  }
  
  public GLLimitedPAandInjuryCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLLimitedPAandInjuryCov");
  }
  
  public productmodel.GenericGLLimitedPAandInjuryCovDescriptionType getGLLimitedPAandInjuryCovDescriptionTerm() {
    return (productmodel.GenericGLLimitedPAandInjuryCovDescriptionType)getCovTerm("GLLimitedPAandInjuryCovDescription");
  }
  
  public boolean getHasGLLimitedPAandInjuryCovDescriptionTerm() {
    return hasCovTerm("GLLimitedPAandInjuryCovDescription");
  }
  
  static {
    com.guidewire._generated.productmodel.GLLimitedPAandInjuryCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLLimitedPAandInjuryCov>() {
      public productmodel.GLLimitedPAandInjuryCov newEmptyInstance() {
        return new productmodel.GLLimitedPAandInjuryCov();
      }
      
      
    });
  }
}