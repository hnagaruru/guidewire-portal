package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/BOPLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLine extends entity.BusinessOwnersLine {
  protected BOPLine()  {
    super((java.lang.Void)null);
  }
  
  public BOPLine(entity.PolicyPeriod branch)  {
    super(branch, "BOPLine");
  }
  
  public BOPLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLine");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLine>() {
      public productmodel.BOPLine newEmptyInstance() {
        return new productmodel.BOPLine();
      }
      
      
    });
  }
}