package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPAlaskaAFGLCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPAlaskaAFGLCov extends entity.BusinessOwnersCov {
  protected BOPAlaskaAFGLCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPAlaskaAFGLCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPAlaskaAFGLCov");
  }
  
  public BOPAlaskaAFGLCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPAlaskaAFGLCov");
  }
  
  public productmodel.DirectBOPAlaskaAFGLLimType getBOPAlaskaAFGLLimTerm() {
    return (productmodel.DirectBOPAlaskaAFGLLimType)getCovTerm("BOPAlaskaAFGLLim");
  }
  
  public boolean getHasBOPAlaskaAFGLLimTerm() {
    return hasCovTerm("BOPAlaskaAFGLLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPAlaskaAFGLCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPAlaskaAFGLCov>() {
      public productmodel.BOPAlaskaAFGLCov newEmptyInstance() {
        return new productmodel.BOPAlaskaAFGLCov();
      }
      
      
    });
  }
}