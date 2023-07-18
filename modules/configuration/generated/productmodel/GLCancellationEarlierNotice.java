package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLCancellationEarlierNotice.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLCancellationEarlierNotice extends entity.GeneralLiabilityCond {
  protected GLCancellationEarlierNotice()  {
    super((java.lang.Void)null);
  }
  
  public GLCancellationEarlierNotice(entity.PolicyPeriod branch)  {
    super(branch, "GLCancellationEarlierNotice");
  }
  
  public GLCancellationEarlierNotice(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLCancellationEarlierNotice");
  }
  
  public productmodel.DirectCancellationNoticeType getCancellationNoticeTerm() {
    return (productmodel.DirectCancellationNoticeType)getCovTerm("CancellationNotice");
  }
  
  public boolean getHasCancellationNoticeTerm() {
    return hasCovTerm("CancellationNotice");
  }
  
  static {
    com.guidewire._generated.productmodel.GLCancellationEarlierNoticeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLCancellationEarlierNotice>() {
      public productmodel.GLCancellationEarlierNotice newEmptyInstance() {
        return new productmodel.GLCancellationEarlierNotice();
      }
      
      
    });
  }
}