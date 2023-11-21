package New.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import New.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Таблица
 */
@Entity(name = "IISNewТаблица")
@Table(schema = "public", name = "Таблица")
public class Tablica {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Заработок_год")
    private Integer заработок_год;

    @Column(name = "Срзаработок")
    private Integer срзаработок;

    @Column(name = "Пособие")
    private Integer пособие;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Empty")
    @Convert("Empty")
    @Column(name = "Empty", length = 16, unique = true, nullable = false)
    private UUID _emptyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Empty", insertable = false, updatable = false)
    private Raschet empty;


    public Tablica() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЗаработок_год() {
      return заработок_год;
    }

    public void setЗаработок_год(Integer заработок_год) {
      this.заработок_год = заработок_год;
    }

    public Integer getСрзаработок() {
      return срзаработок;
    }

    public void setСрзаработок(Integer срзаработок) {
      this.срзаработок = срзаработок;
    }

    public Integer getПособие() {
      return пособие;
    }

    public void setПособие(Integer пособие) {
      this.пособие = пособие;
    }


}